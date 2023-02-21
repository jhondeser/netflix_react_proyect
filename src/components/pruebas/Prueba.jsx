// import React, { useState } from "react";

// const SearchButton = () => {
//   const [showSearch, setShowSearch] = useState(false);

//   const handleClick = () => {
//     setShowSearch(!showSearch);
//   };

//   const handleBlur = () => {
//     setShowSearch(false);
//   };

//   return (
//     <div onBlur={handleBlur}>
//       <button onClick={handleClick}>
//         <svg className="color_svg bi bi-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
//         </svg>
//       </button>
//       {showSearch && (
//         <input className="inp_search" type="text" placeholder="Search..." />
//       )}
//     </div>
//   );
// };

// export default SearchButton;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Example = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.themoviedb.org/3/movie/popular?api_key=38758aa5680465c0472c269bc08e22d5'
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default Example;