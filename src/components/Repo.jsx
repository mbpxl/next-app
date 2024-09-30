async function fetchRepo(name) {
  const response = await fetch(`https://api.github.com/repos/mbpxl/${name}`);
  return await response.json();
};

const Repo = async ({name}) => {
  const repo = await fetchRepo(name);

  return (
    <div className="">Repo</div>
  )
};

export default Repo;