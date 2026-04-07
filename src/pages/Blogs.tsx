import React from 'react';
import './Blogs.css';
import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';

interface Blog {
  title: string;
  platform: string;
  icon: JSX.Element;
  link: string;
  description: string;
  external?: boolean;
}

const blogs: Blog[] = [
  {
    title: 'Why I Moved My Site to Cloudflare Pages',
    platform: 'Writeup',
    icon: <FaBookOpen />,
    link: '/cloudflare-pages-failover',
    description: 'Once the SSD looked risky, I needed a failover plan fast. Moving the static site to Cloudflare Pages gave me automatic GitHub-based deploys while I keep the rest of the homelab behind the tunnel.',
  },
  {
    title: 'Two Hours to Save a Server',
    platform: 'Writeup',
    icon: <FaBookOpen />,
    link: '/two-hours-to-save-a-server',
    description: 'How I tracked down repeated server freezes, confirmed a failing SSD, and got a backup pipeline running before the disk gave out.',
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <p className="blogs-eyebrow">Writing</p>
      <h1 className="blogs-title">Writeups, notes, and projects that taught me something</h1>
      <p className="blogs-intro">A place for technical writeups from the homelab and the kinds of problems I like digging into.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => {
          const card = (
            <>
              <div className="blog-icon">{blog.icon}</div>
              <div className="blog-info">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-description">{blog.description}</p>
                <span className="blog-platform">{blog.platform}</span>
              </div>
            </>
          );

          if (blog.external) {
            return (
              <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.12}s` } as React.CSSProperties}>
                {card}
              </a>
            );
          }

          return (
            <Link to={blog.link} key={index} className="blog-card" style={{ '--delay': `${index * 0.12}s` } as React.CSSProperties}>
              {card}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
