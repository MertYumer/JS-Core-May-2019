function solve(input) {
    function comparator(width, height) {
        let rectangle = {
            width: width,
            height: height,
            area: () => rectangle.width * rectangle.height,
            
            compareTo: function (other) {
                let result = other.area() - rectangle.area();
                return result || (other.width - rectangle.width);   
            }  
        };  
        
        return rectangle;
    }

    let rectangles = [];

    for (const [width, height] of input) {
        let rectangle = comparator(width, height);
        rectangles.push(rectangle);
    }

    rectangles.sort((a, b) => a.compareTo(b));
    return rectangles;
}