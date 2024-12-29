import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Peterbald' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filterBreed, setFilterBreed] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const filteredCats = cats.filter(
    (cat) =>
      (filterBreed === '' || cat.breed === filterBreed) &&
      (searchName === '' || cat.name.toLowerCase().includes(searchName.toLowerCase()))
  );

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mb-3 d-flex justify-content-center align-items-center gap-2">
        <select
          value={filterBreed}
          onChange={(e) => setFilterBreed(e.target.value)}
          className="form-select"
          style={{ width: '200px' }}
        >
          <option value="">All Breeds</option>
          <option value="Siamese">Siamese</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Birman">Birman</option>
          <option value="Peterbald">Peterbald</option>
        </select>
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="form-control"
          style={{ width: '200px' }}
        />
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-2" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col">
            <div className="card h-100">
              <img src={cat.image} alt={cat.name} className="card-img-top" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{cat.name}</h5>
                <p className="card-text">Age: {cat.age}</p>
                <p className="card-text">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


