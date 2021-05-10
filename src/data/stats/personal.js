import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2000-07-15T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const Coffee = () => {
  const start = new Date('2021-05-01');
  const end = Date.now();
  let coffee = 824;// coffee count on date 2021-05-01

  while (end > start) {
    coffee += 1;
    start.setDate(start.getDate() + 1);
  }

  return coffee;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'city',
    label: 'Current city',
    value: 'New Delhi',
  },
  {
    key: 'coffee',
    label: 'Cups of coffee',
    value: <Coffee />,
  },
  {
    key: 'study',
    label: 'Weekly study hours',
    value: '30',
  },
  {
    key: 'Cities',
    label: 'Cities visited',
    value: 4,
  },
];

export default data;
