interface HeaderPageProps {
  title: string;
  subtitle: string;
}

function HeaderPage({ title, subtitle }: HeaderPageProps) {
  return (
    <div className="header header-page">
      <div className="box-header-page">
        <div className="title-header-page">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;