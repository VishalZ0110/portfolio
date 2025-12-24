import { publications } from '../data/publications';

const Publications = () => {
  return (
    <section id="publications" className="publications">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <div className="list-container">
          {publications.map((pub) => (
            <div className="list-item" key={pub.id}>
              <div className="list-item-image">
                <img src={pub.image} alt={pub.title} />
              </div>
              <div className="list-item-content">
                <h3>{pub.title}</h3>
                <p className="item-meta">
                  {pub.authors.split('Yadav, V.').map((part, index, array) => (
                    <span key={index}>
                      {part}
                      {index < array.length - 1 && <strong>Yadav, V.</strong>}
                    </span>
                  ))} • {pub.venue}
                </p>
                <div className="item-links">
                  {pub.links.map((link) => (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="item-link"
                      key={link.label}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
