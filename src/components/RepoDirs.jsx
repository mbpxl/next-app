import Link from "next/link";

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(`https://api.github.com/repos/mbpxl/${name}/contents`, {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}

const RepoDirs = async({name}) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === 'dir');

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RepoDirs;