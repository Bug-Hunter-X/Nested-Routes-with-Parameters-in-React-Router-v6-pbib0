```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/:id?" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function Contact() {
  let { id } = useParams();
  return (
    <h1>Contact</h1>
    {id && <p>Contact ID: {id}</p>}
  );
}
export default App;
```