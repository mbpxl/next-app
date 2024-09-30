import Repo from '@/components/Repo';

const RepoPage = ({params}) => {
  return (
    <div className="card">
      <Repo name={params.name}/>
    </div>
  )
};

export default RepoPage;