import React from 'react';

function EducationResearch() {
  const faqs = [
    { question: 'What is chronic pain?', link: 'https://www.webmd.com/pain-management/guide/chronic-pain' },
    { question: 'How to manage stress?', link: 'https://www.helpguide.org/articles/stress/stress-management.htm' },
    { question: 'Benefits of hydration', link: 'https://www.healthline.com/nutrition/7-health-benefits-of-water' },
  ];

  const rssFeeds = [
    { title: 'Health News', url: 'https://www.medicalnewstoday.com/rss' },
    { title: 'Pain Research', url: 'https://www.painresearchforum.org/rss' },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        {faqs.map((faq, idx) => (
          <li key={idx}>
            <a href={faq.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {faq.question}
            </a>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-4">RSS Feeds</h2>
      <ul className="list-disc list-inside space-y-2">
        {rssFeeds.map((feed, idx) => (
          <li key={idx}>
            <a href={feed.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {feed.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EducationResearch;
