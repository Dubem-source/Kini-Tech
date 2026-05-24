type PageHeadProps = {
  title: string;
  description: string;
  image?: string;
  path?: string;
};

export default function PageHead({
  title,
  description,
  image = "/images/og-image.png",
  path = "/",
}: Readonly<PageHeadProps>) {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://dubemdev.me"
  ).replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${siteUrl}${normalizedPath}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
