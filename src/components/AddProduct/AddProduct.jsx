import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value 
    const brand = form.brand.value 
    const type = form.type.value 
    const price = form.price.value 
    const rating = form.rating.value 
    const details = form.details.value 
    const photo = form.photo.value 
    form.reset();
    
    const newProduct = {
      name,
      brand,
      type,
      price,
      rating,
      photo,
      details
    }
    console.log(newProduct);
    // send data to the server\\
    fetch('https://fashion-project-server-i89a7jwaj-rejuwan12.vercel.app/products',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire(
            {
            title: "Successfully",
            text: "Product Added ",
            icon: "success",
            confirmButtonText: "cool"
            }
          )}

    })
  }
  return (
   
    <div className="bg-[#F4F3F0] p-24">
      <div>
        <h1 className="text-3xl font-bold text-center">Add a Product</h1>
        <p className="text-center mb-10">Enter your details to Add Product .</p>
      </div>
      <form onSubmit={handleAddProduct}>
        {/* form name and quantity row */}
        <div className="md:flex gap-8 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Brand Name</span>
            </label>
            <label className="input-group">
            <select
                name="brand"
                id=""
                className=" input input-bordered w-full"
              >
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="H&M">H&M</option>
                <option value="Gucci">Gucci</option>
                <option value="One Ummah BD">One Ummah BD</option>
                <option value="Zara">Zara</option>
              </select>
            </label>
          </div>
        </div>

        {/* form supplier test row */}

        <div className="md:flex gap-8 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Type</span>
            </label>
            <label className="input-group">

              {/* <input
                name="type"
                type="text"
                placeholder="Type"
                className="input input-bordered w-full"
              /> */}
              <select
                name="type"
                id=""
                className=" input input-bordered w-full"
              >
                <option value="T-Shirt">T-Shirt</option>
                <option value="Shoe">Shoe</option>
                <option value="Pant">Pant</option>
                <option value="Burka">Burka</option>
                <option value="Panjabi">Panjabi</option>
                <option value="Jubbah"> White Jubbah</option>
              </select>
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <label className="input-group">
              <input
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex gap-8 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Rating</span>
            </label>
            <label className="input-group">
           
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Short Details</span>
            </label>
            <label className="input-group">
            <textarea className="textarea  input input-bordered w-full h-[100px]  " name="details" placeholder="Bio"></textarea>
              {/* <input
                name="details"
                type="text"
                placeholder="Short Details"
                className="input input-bordered w-full"
              /> */}
            </label>
          </div>
        </div>
        {/* form photo url row */}
        <div className="">
          <div className="form-control md:w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="
                Photo URL link"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Product"
          className="btn btn-block bg-black border-none text-white"
        />
      </form>
    </div>
  );
};

export default AddProduct;
