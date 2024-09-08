import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications | Shadman Wadith',
  description: 'Explore the journal articles and conference proceedings published by Shadman Wadith, covering topics like multi-agent reinforcement learning, image classification, and sustainable technologies.',
  keywords: ['Shadman Wadith', 'Publications', 'Research', 'Journal Articles', 'Conference Proceedings', 'Reinforcement Learning', 'Image Classification', 'Sustainable Technologies'],
  openGraph: {
    title: 'Wadith - Researcher & Developer',
    description: 'Read the latest research and conference papers by Shadman Wadith, including publications on decentralized reinforcement learning and energy-efficient UAVs.',
    url: 'https://shadmanwadith.xyz/publications',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const publications = {
  journalArticles: [
    {
      title: 'DePAint: a decentralized safe multi‑agent reinforcement learning algorithm considering peak and average constraints',
      authors: 'KM Shadman Wadith, Raheeb Hassan, Md Mamun Rashid, Md Mosaddek Khan',
      journal: 'Applied Intelligence',
      pages: 'pp. 6108–6124',
      year: 2024,
      link: 'https://link.springer.com/article/10.1007/s10489-024-05433-x' 
    }
  ],
  conferenceProceedings: [
    {
      title: 'Enhancing CNN Model by Incorporating Upscaling and Downscaling Techniques for Image Classification',
      authors: 'Shamim Ahmed, Sadikur Rahman, Saiful Azad, K.M. Shadman Wadith',
      conference: '2024 6th International Conference on Electrical Engineering and Information Communication Technology (ICEEICT)',
      year: 2024,
      link: 'https://ieeexplore.ieee.org/abstract/document/10534403/' 
    },
    {
      title: 'Energy Consumption Aware Delay Minimization for UAV Enabled Internet of Vehicle',
      authors: 'Shariar Hossain Emon, MD Lotifur Rahman, Sumiya Siddika Omi, Palash Roy, Md. Abdur Razzaque, K. M. Shadman Wadith, Jargis Ahmed',
      conference: '2023 5th International Conference on Sustainable Technologies for Industry 5.0 (STI)',
      year: 2023,
      link: 'https://ieeexplore.ieee.org/abstract/document/10464440/' 
    },
    {
      title: 'EHHGSO: Enhancing Hybrid Hugo Gas Solubility Optimization Algorithm Using Backtracking Technique',
      authors: 'Ajoy Mahanta, Md. Oshama Bin Nur, Rakibul Islam, Saiful Azad, Shadman Wadith, Mufti Mahmud, M. Shamim Kaiser',
      conference: '2023 5th International Conference on Sustainable Technologies for Industry 5.0 (STI)',
      year: 2023,
      link: 'https://ieeexplore.ieee.org/abstract/document/10464490/'
    }
  ]
};

const PublicationsPage = () => {
  return (
    <section className="py-8 px-10">
      <div className="max-w-4xl mx-auto px-5 md:px-24">
        
        <div className="mb-12">
          <h1 className='hidden'> Shadman Wadith Publications</h1>
          <h2 className="text-3xl font-semibold mb-4">Journal Articles</h2>
          {publications.journalArticles.map((paper, index) => (
            <div key={index} className="bg-gray-50 shadow-md rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-2">
                <Link href={paper.link} target="_blank" className="text-purple-600 hover:underline">
                  {paper.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-2">
                {paper.authors}
              </p>
              <p className="text-gray-500">
                {paper.journal}, {paper.pages}. {paper.year}
              </p>
            </div>
          ))}
        </div>        
        <div>
          <h2 className="text-3xl font-semibold mb-4">Conference Proceedings</h2>
          {publications.conferenceProceedings.map((paper, index) => (
            <div key={index} className="bg-gray-50 shadow-md rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-2">
                <Link href={paper.link} target="_blank" className="text-purple-600 hover:underline">
                  {paper.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-2">
                {paper.authors}
              </p>
              <p className="text-gray-500">
                {paper.conference}, {paper.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsPage;
