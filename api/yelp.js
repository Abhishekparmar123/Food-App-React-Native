import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer 3W_h7LPa-SkwrRn_cq1oUnLZNR6m2VPjDmJKKsHQSnmf6yLOl9xA5o2tJO2XpwHmC9i1ZQvVYQemNvI1dPKnj3otCy5WqsCTz16SQ5EZ8ckS6AYFiHIwZqrslwqMYXYx'
    }
});