export class ProductService{
    getProducts() : object [] {
        return [
        { 
              imageUrl: "http://loremflickr.com/150/150?random=1",
              productName: "Product 1",
              releasedDate: new Date(2018, 5, 30),
              description: "Cras sit amet nibh libero, in gravida...",
              rating: 4,
              numOfReviews: 2
        },
        { 
            imageUrl: "http://loremflickr.com/150/150?random=2",
            productName: "Product 2",
            releasedDate: new Date(2018, 4, 21),
            description: "Cras sit amet nibh libero, in gravida...",
            rating: 1,
            numOfReviews: 5
        },
        { 
            imageUrl: "http://loremflickr.com/150/150?random=3",
            productName: "Product 3",
            releasedDate: new Date(2018, 1, 2),
            description: "Cras sit amet nibh libero, in gravida...",
            rating: 5,
            numOfReviews: 7
        }];
    }
}