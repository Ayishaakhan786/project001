import Image from "next/image";
import Link from "next/link";
import gold from "./pics/iPhone14Progold.jpg";
import white from "./pics/iphone11-white.png";
import purple from "./pics/iphone-15-purple.jpg";
import black from "./pics/iphone15-black.jpg";
import black1 from "./pics/iphone11-black.jpg";
import pro from "./pics/iphone14promax-black.jpg";
export default function Blogs (){
    return (
        <section className="py-4 px-4 sm:px-8">
            <div className="ParentContainer mx-auto">
                <div className="ChildContainer w-full max-w-2xl mx-auto mb-10 bg-white">
                    <h1 className = "text-center font-bold text-2xl underline">Blogs</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {post01()}
                    {post02()}
                    {post03()}
                    {post04()}
                    {post05()}
                    {post06()}
                </div>
            </div>
        </section>
    );
}
function post01() {
    return (
        <div className = "Items bg-white p-4 rounded-lg shadow-lg">
            <div className="Images flex justify-center">
            <Image src={gold} alt="img" width={150} height={150} className="h-40 object-contain border border-gray-200"/>
            </div>
            <div className = "Product Name px-3 text-center">
                <h1 className="font-medium text-lg">Apple iphone 14 pro 512GB Gold</h1>
            </div>
            <div className = "Model Number px-3 text-center text-sm text-gray-500">
                <p>(MQ233)</p>
            </div>
            <div className = "Price px-3 text-center text-red-600 font-semibold">
                <h1>$1437</h1>
            </div>
            <button className = "w-full mt-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-500">Shop Now</button>
        </div>
    );
}
function post02() {
    return (
        <div className = "Items bg-white p-4 rounded-lg shadow-lg">
            <div className="Images flex justify-center">
            <Image src={white} alt="img" width={150} height={150} className="h-40 object-contain border border-gray-200"/>
            </div>
            <div className = "Product Name px-3 text-center">
                <h1 className="font-medium text-lg">Apple iphone 11 pro 128GB White</h1>
            </div>
            <div className = "Model Number px-3 text-center text-sm text-gray-500">
                <p>(MQ233)</p>
            </div>
            <div className = "Price px-3 text-center text-red-600 font-semibold">
                <h1>$510</h1>
            </div>
            <button className = "w-full mt-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-500">Shop Now</button>
        </div>
    );
}
function post03() {
    return (
        <div className = "Items bg-white p-4 rounded-lg shadow-lg">
            <div className="Images flex justify-center">
            <Image src={black1} alt="img" width={150} height={150} className="h-40 object-contain border border-gray-200"/>
            </div>
            <div className = "Product Name px-3 text-center">
                <h1 className="font-medium text-lg">Apple iphone 11 pro 128GB black</h1>
            </div>
            <div className = "Model Number px-3 text-center text-sm text-gray-500">
                <p>(MQ233)</p>
            </div>
            <div className = "Price px-3 text-center text-red-600 font-semibold">
                <h1>$550</h1>
            </div>
            <button className = "w-full mt-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-500">Shop Now</button>
        </div>
    );
}
function post04() {
    return (
        <div className = "Items bg-white p-4 rounded-lg shadow-lg">
            <div className="Images flex justify-center">
            <Image src={black} alt="img" width={150} height={150} className="h-40 object-contain border border-gray-200"/>
            </div>
            <div className = "Product Name px-3 text-center">
                <h1 className="font-medium text-lg">Apple iphone 15 Pro 128GB black</h1>
            </div>
            <div className = "Model Number px-3 text-center text-sm text-gray-500">
                <p>(MQ233)</p>
            </div>
            <div className = "Price px-3 text-center text-red-600 font-semibold">
                <h1>$999</h1>
            </div>
            <button className = "w-full mt-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-500">Shop Now</button>
        </div>
    );
}
function post05() {
    return (
        <div className = "Items bg-white p-4 rounded-lg shadow-lg">
            <div className="Images flex justify-center">
            <Image src={purple} alt="img" width={150} height={150} className="h-40 object-contain border border-gray-200"/>
            </div>
            <div className = "Product Name px-3 text-center">
                <h1 className="font-medium text-lg">Apple iPhone 15 Plus 512GB Deep Purple</h1>
            </div>
            <div className = "Model Number px-3 text-center text-sm text-gray-500">
                <p>(MQ233)</p>
            </div>
            <div className = "Price px-3 text-center text-red-600 font-semibold">
                <h1>$899</h1>
            </div>
            <button className = "w-full mt-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-500">Shop Now</button>
        </div>
    );
}
function post06() {
    return (
        <div className = "Items bg-white p-4 rounded-lg shadow-lg">
            <div className="Images flex justify-center">
            <Image src={pro} alt="img" width={150} height={150} className="h-40 object-contain border border-gray-200"/>
            </div>
            <div className = "Product Name px-3 text-center">
                <h1 className="font-medium text-lg">Apple iPhone 14 Pro Max 256GB Space Black </h1>
            </div>
            <div className = "Model Number px-3 text-center text-sm text-gray-500">
                <p>(MQ233)</p>
            </div>
            <div className = "Price px-3 text-center text-red-600 font-semibold">
                <h1>$1,099</h1>
            </div>
            <button className = "w-full mt-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-500">Shop Now</button>
        </div>
    );
}