class circles{
    constructor(radi= "1.0" , colors="red")
    {
this.radi=radi;
this.colors=colors;
    }
get radius()
{
return `${this.radi}`;
}

set radius(radi)
{
    this.radi= radi;
}

get color()
{
return `${this.colors}`;
} 

set color(colors)
{
    this.colors=colors;

}

get area()
{
    return 3.14*`${this.radi*this.radi}`;
}

get circumference()
{
    return 2*`${3.14*this.radi}`;

}

toString()
{
return `"Circle[radius=${this.radi},color=${this.colors}]"  `;
}

}
const circle1=new circles();
console.log(circle1);

const circle2=new circles(2.75);
console.log(circle2);

const circle3=new circles(3.14,"blue");
console.log(circle3);

const circle4=new circles();
console.log("the radius of the circle is:"+circle4.radius);

const circle5=new circles();
circle5.radius=2.0;
console.log("set radius="+circle5.radius)

const circle6=new circles();
console.log("the color of the circle is :"+circle6.color);

const circle7=new circles();
circle7.color="black";
console.log("set colour ="+circle7.color);

const str=new circles();
 console.log(str.toString());

const area=new circles();
console.log("the area of the circle is :"+area.area);

const circum=new circles();
console.log("the circumference of the circle is:"+circum.circumference);

 

