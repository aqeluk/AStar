import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const ChildminderProfile = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const fadeRef = useRef();

  // Simulated API call to fetch reviews
  useEffect(() => {
    // Replace this with your actual API call to retrieve reviews
    const fetchReviews = async () => {
      // Simulated reviews data
      const data = [
        {
          id: 1,
          author: 'John B',
          date: '03/04/2023',
          rating: 5,
          content:
            'I am brand new to the UK having recently arrived from the US. I was relieved to meet Jamila and see the rapport she quickly developed with my young son. She’s very attentive to his gluten allergy and she updates me throughout the day with photos and info which I find very comforting. Your child would also be in good hands with Jamila.',
          image: 'https://pf1.childcare.co.uk/6/40e39/9664d66c.thumbnail.png',
        },
        {
          id: 2,
          author: 'Coral',
          date: '28/03/2023',
          rating: 5,
          content:
            'Jamila looked after my daughter from January this year. She is always kind, caring and loving towards her. Looking after her very well. Always punctual picking up her from the school, and showing initiative. My daughter feels good and happy with her. I am very pleased with Jamila, and can highly recommend her as a childminder for your child. Thank you! Regards, Kristina',
          image: 'https://pf1.childcare.co.uk/6/3c2e6/6c822600.thumbnail.png',
        },
      ];
      setReviews(data);
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews]);

  const fadeClass = fade ? 'fade-in' : 'fade-out';

  return (
    <div className="container mx-auto p-4 shadow-lg rounded-md bg-white">
      <div className="flex items-center space-x-4">
        <Image
          className="w-12 h-12 rounded-full"
          src="https://pf1.childcare.co.uk/5/e5dca/a8c5ce68.thumbnail.png"
          alt="Avatar for Jamila P"
          width={48}
          height={48}
        />
        <div>
          <h1 className="text-xl font-bold">Jamila P</h1>
          <p>Childminder in London: Barnet (also available for babysitting)</p>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2.32l1.88 4.554h4.826l-3.702 2.756 1.765 4.574L10 12.885l-4.757 2.33 1.765-4.574L3.285 6.874h4.827L10 2.32zm0-2.32L3.335 5.855H.478l3.702 2.756L.415 11.985l3.702-2.757L3.34 15.692h6.321L10 20l2.34-4.308h6.321l-1.287-3.987 3.702 2.756-3.702-2.756L19.522 5.855h-2.857L10 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-yellow-500">5 stars</span>
            <span>2 reviews</span>
          </div>
        </div>
      </div>

      <div className="my-4">
        <p>Usually responds within 15 minutes</p>
      </div>

      <div>
        <h2 className="text-lg font-bold">About Me</h2>
        <p>
          I really enjoy looking after children and I have a lot of energy and am reliable and
          organized. I think it&rsquo;s important to develop a good relationship with the
          children&rsquo;s parents and become part of the family. I am available Monday to Friday
          7:45-6:45 and weekends.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold my-6">Reviews</h2>
        <div className={fadeClass} ref={fadeRef}>
          <div className="flex items-center space-x-4">
            {reviews.length > 0 && (
              <Image
                className="w-12 h-12 rounded-full"
                src={reviews[currentIndex]?.image}
                alt="Avatar for review author"
                width={48}
                height={48}
              />
            )}
            <div>
              <p className="font-bold">{reviews[currentIndex]?.author}</p>
              <p className="text-gray-500">{reviews[currentIndex]?.date}</p>
              <div className="flex items-center space-x-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${
                      index < reviews[currentIndex]?.rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2.32l1.88 4.554h4.826l-3.702 2.756 1.765 4.574L10 12.885l-4.757 2.33 1.765-4.574L3.285 6.874h4.827L10 2.32zm0-2.32L3.335 5.855H.478l3.702 2.756L.415 11.985l3.702-2.757L3.34 15.692h6.321L10 20l2.34-4.308h6.321l-1.287-3.987 3.702 2.756-3.702-2.756L19.522 5.855h-2.857L10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-2 text-sm">{reviews[currentIndex]?.content}</p>
        </div>
        <div className="my-4">
          <a
            href="https://www.childcare.co.uk/profile/1579314"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            View profile on childcare.co.uk
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChildminderProfile;
