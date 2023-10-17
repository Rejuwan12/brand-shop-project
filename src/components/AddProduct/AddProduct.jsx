

const AddProduct = () => {
    return (
        <div className="bg-[#F4F3F0] p-24">
      <div>
      <h1 className="text-3xl font-bold text-center">Add a Product</h1>
      <p className="text-center mb-10">
      Enter your details to Add Product .
      </p>
      </div>
      <form>
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
              <input
                name="quantity"
                type="text"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
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
              <input
                type="text"
                name="supplier"
                placeholder="Type"
                className="input input-bordered w-full"
                
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <label className="input-group">
              <input
                name="taste"
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
                name="category"
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
              <input
                name="details"
                type="text"
                placeholder="Short Details"
                className="input input-bordered w-full"
              />
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
       <input type="submit" value='Add Product'  className="btn btn-block bg-black border-none text-white"/>
      </form>
    </div>
    );
};

export default AddProduct;
