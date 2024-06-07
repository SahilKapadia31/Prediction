# Prediction

`prediction` is a lightweight TypeScript library that provides search suggestions similar to Google's autocomplete feature. It helps improve user experience by suggesting relevant search queries as the user types.

## Installation

To install the package, use npm:

```bash
npm install predict

```
## Usage
Here's a basic example of how to use the prediction library in a React application:

```javascript
import React, { useState } from 'react';
import Prediction from 'prediction';

function SearchComponent() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = async (event) => {
        const userInput = event.target.value;
        setQuery(userInput);
        
        if (userInput.length > 2) { // Fetch suggestions only for input length > 2
            const results = await Prediction.getSuggestions(userInput);
            setSuggestions(results);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={handleInputChange} 
                placeholder="Search..."
            />
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchComponent;

```


## Features

- Real-time  Suggestions:  Provides  real-time  search  suggestions  as  the  user  types.
- Customizable:  Easy  to  integrate  and  customize  according  to  your  needs.
- Lightweight:  Minimal  impact  on  your  application's performance.


## API Reference

`Prediction.getSuggestions(query)`

Fetches search suggestions based on the user's input.

Parameters:
- `query` (string): The input string for which suggestions are to be fetched.
Returns:
- `Promise<Array<string>>`: A promise that resolves to an array of suggested search queries.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Feedback

If you have any feedback, please reach out to us at sahilkapadia89@.com


## 🚀 About Me
I'm a full stack developer...


# Hi, I'm Sahil! 👋


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sahil-kapadia-079b04142/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)


## 🛠 Skills
HTML, CSS, Javascript, typescript, reactJs, angularJs, nodeJs...

