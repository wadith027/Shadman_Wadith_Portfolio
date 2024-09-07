import Link from 'next/link';

const publications = {
  journalArticles: [
    {
      title: 'DePAint: a decentralized safe multi‑agent reinforcement learning algorithm considering peak and average constraints',
      authors: 'KM Shadman Wadith, Raheeb Hassan, Md Mamun Rashid, Md Mosaddek Khan',
      journal: 'Applied Intelligence',
      pages: 'pp. 6108–6124',
      year: 2024,
      link: 'https://link.springer.com/article/10.1007/s10489-024-05433-x' // Replace with the actual link
    }
  ],
  conferenceProceedings: [
    {
      title: 'Enhancing CNN Model by Incorporating Upscaling and Downscaling Techniques for Image Classification',
      authors: 'Shamim Ahmed, Sadikur Rahman, Saiful Azad, K.M. Shadman Wadith',
      conference: '2024 6th International Conference on Electrical Engineering and Information Communication Technology (ICEEICT)',
      year: 2024,
      link: 'https://ieeexplore.ieee.org/abstract/document/10534403/' // Replace with the actual link
    },
    {
      title: 'Energy Consumption Aware Delay Minimization for UAV Enabled Internet of Vehicle',
      authors: 'Shariar Hossain Emon, MD Lotifur Rahman, Sumiya Siddika Omi, Palash Roy, Md. Abdur Razzaque, K. M. Shadman Wadith, Jargis Ahmed',
      conference: '2023 5th International Conference on Sustainable Technologies for Industry 5.0 (STI)',
      year: 2023,
      link: 'https://ieeexplore.ieee.org/abstract/document/10464440/' // Replace with the actual link
    },
    {
      title: 'EHHGSO: Enhancing Hybrid Hugo Gas Solubility Optimization Algorithm Using Backtracking Technique',
      authors: 'Ajoy Mahanta, Md. Oshama Bin Nur, Rakibul Islam, Saiful Azad, Shadman Wadith, Mufti Mahmud, M. Shamim Kaiser',
      conference: '2023 5th International Conference on Sustainable Technologies for Industry 5.0 (STI)',
      year: 2023,
      link: 'https://ieeexplore.ieee.org/abstract/document/10464490/' // Replace with the actual link
    }
  ]
};

const PublicationsPage = () => {
  return (
    <section className="py-8 px-10">
      <div className="max-w-4xl mx-auto px-5 md:px-24">
        
        <div className="mb-12">
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
