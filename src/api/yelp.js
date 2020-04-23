import axios from 'axios';


const yelp = axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer gMVc6cHrZ-D3Ra-DHku8ONuKly5iWJzGRqvx5t5ypQxZbRhevn-dmZ2U6YaQKI6LBpDAt0xIUAJD7qZ5n8YwTR5HHm0zOcWogg0jnD8reTWiqs3yz2P3VB0JT7CaXnYx"
    }
})

export default yelp;