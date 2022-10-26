import { Link } from "react-router-dom";

const reviews = [
    {
        name: "BMW",
        customer: 'Moshiur',
        rating: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae debitis sint placeat quos deserunt optio, obcaecati rem cupiditate praesentium?"
    },
    {
        name: "Ferari",
        customer: 'Sayma',
        rating: 4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae debitis sint placeat quos deserunt optio, obcaecati rem cupiditate praesentium? ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae debitis sint placeat quos"
    },
    {
        name: "Marcidis",
        customer: 'Nahid',
        rating: 4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae debitis sint placeat quos deserunt optio, obcaecati rem cupiditate praesentium?"
    },
    {
        name: "BMW",
        customer: 'Moshiur',
        rating: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae debitis sint placeat quos deserunt optio, obcaecati rem cupiditate praesentium?"
    },
    {
        name: "BMW",
        customer: 'Moshiur',
        rating: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae debitis sint placeat quos deserunt optio, obcaecati rem cupiditate praesentium?"
    },
    {
        name: "BMW",
        customer: 'Moshiur',
        rating: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae debitis sint placeat quos deserunt optio, obcaecati rem cupiditate praesentium?"
    },
    {
        name: "BMW",
        customer: 'Moshiur',
        rating: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae debitis sint placeat quos deserunt optio, obcaecati rem cupiditate praesentium?"
    },
];

<ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to='/about'>About</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to='/contact'>Contact</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to='/reviews'>Reviews</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to='/dashboard'>Dashboard</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to='/blogs'>Blogs</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to='/products'>Products</Link>
    </li>
</ul>