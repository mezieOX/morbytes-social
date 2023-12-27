import Card from "./Card/Card";

const Account = () => {
  return (
    <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
        <div className="flex grow flex-col w-full  pb-2 max-md:max-w-full max-md:px-5">
          <Card />
        </div>
      </div>
      {/* <div className="self-center flex w-[578px] max-w-full items-stretch justify-between gap-5 mt-7 max-md:flex-wrap">
            <div className="text-amber-500 text-2xl leading-7 whitespace-nowrap justify-center items-stretch bg-stone-900 bg-opacity-50 px-8 py-2.5 rounded-md max-md:px-5">
              Images
            </div>
            <div className="text-white text-2xl leading-7 self-center my-auto">
              Videos
            </div>
            <div className="text-white text-2xl leading-7 self-center my-auto">
              Reposts
            </div>
          </div>
          <div className="self-stretch mt-12 max-md:max-w-full max-md:mr-1.5 max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7144929767df6c6d02f8c423c4c3762d70bf3044e7f16009932d32d07e922391?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7144929767df6c6d02f8c423c4c3762d70bf3044e7f16009932d32d07e922391?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7144929767df6c6d02f8c423c4c3762d70bf3044e7f16009932d32d07e922391?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7144929767df6c6d02f8c423c4c3762d70bf3044e7f16009932d32d07e922391?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7144929767df6c6d02f8c423c4c3762d70bf3044e7f16009932d32d07e922391?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7144929767df6c6d02f8c423c4c3762d70bf3044e7f16009932d32d07e922391?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7144929767df6c6d02f8c423c4c3762d70bf3044e7f16009932d32d07e922391?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7144929767df6c6d02f8c423c4c3762d70bf3044e7f16009932d32d07e922391?apiKey=8a5a828a24f4486bb10b5e467f00f11e&"
                  className="aspect-square object-contain object-center w-[211px] overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b5c07b89eab864bcf4f66803daebb892f0094a7c3ede30ec34f840a1e59a2390?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c07b89eab864bcf4f66803daebb892f0094a7c3ede30ec34f840a1e59a2390?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c07b89eab864bcf4f66803daebb892f0094a7c3ede30ec34f840a1e59a2390?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c07b89eab864bcf4f66803daebb892f0094a7c3ede30ec34f840a1e59a2390?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c07b89eab864bcf4f66803daebb892f0094a7c3ede30ec34f840a1e59a2390?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c07b89eab864bcf4f66803daebb892f0094a7c3ede30ec34f840a1e59a2390?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c07b89eab864bcf4f66803daebb892f0094a7c3ede30ec34f840a1e59a2390?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c07b89eab864bcf4f66803daebb892f0094a7c3ede30ec34f840a1e59a2390?apiKey=8a5a828a24f4486bb10b5e467f00f11e&"
                  className="aspect-square object-contain object-center w-[211px] overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/313cc24d980a9ea3597db7b9d251d4cc1933f35dee5ecbb88e712d83c0821b34?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/313cc24d980a9ea3597db7b9d251d4cc1933f35dee5ecbb88e712d83c0821b34?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/313cc24d980a9ea3597db7b9d251d4cc1933f35dee5ecbb88e712d83c0821b34?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/313cc24d980a9ea3597db7b9d251d4cc1933f35dee5ecbb88e712d83c0821b34?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/313cc24d980a9ea3597db7b9d251d4cc1933f35dee5ecbb88e712d83c0821b34?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/313cc24d980a9ea3597db7b9d251d4cc1933f35dee5ecbb88e712d83c0821b34?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/313cc24d980a9ea3597db7b9d251d4cc1933f35dee5ecbb88e712d83c0821b34?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/313cc24d980a9ea3597db7b9d251d4cc1933f35dee5ecbb88e712d83c0821b34?apiKey=8a5a828a24f4486bb10b5e467f00f11e&"
                  className="aspect-square object-contain object-center w-[211px] overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch mt-7 max-md:max-w-full max-md:mr-1.5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/90b502284ebc72778d91e5c3a4ac28c1e78ea0f0e881eb3eeae2a0418ddafe0b?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/90b502284ebc72778d91e5c3a4ac28c1e78ea0f0e881eb3eeae2a0418ddafe0b?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/90b502284ebc72778d91e5c3a4ac28c1e78ea0f0e881eb3eeae2a0418ddafe0b?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/90b502284ebc72778d91e5c3a4ac28c1e78ea0f0e881eb3eeae2a0418ddafe0b?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/90b502284ebc72778d91e5c3a4ac28c1e78ea0f0e881eb3eeae2a0418ddafe0b?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/90b502284ebc72778d91e5c3a4ac28c1e78ea0f0e881eb3eeae2a0418ddafe0b?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/90b502284ebc72778d91e5c3a4ac28c1e78ea0f0e881eb3eeae2a0418ddafe0b?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/90b502284ebc72778d91e5c3a4ac28c1e78ea0f0e881eb3eeae2a0418ddafe0b?apiKey=8a5a828a24f4486bb10b5e467f00f11e&"
                  className="aspect-square object-contain object-center w-[211px] overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/654f53e82907aa5bfa1e7f223997bfdd3b7b1651fc73dcf518e0b3f9604d678a?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/654f53e82907aa5bfa1e7f223997bfdd3b7b1651fc73dcf518e0b3f9604d678a?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/654f53e82907aa5bfa1e7f223997bfdd3b7b1651fc73dcf518e0b3f9604d678a?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/654f53e82907aa5bfa1e7f223997bfdd3b7b1651fc73dcf518e0b3f9604d678a?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/654f53e82907aa5bfa1e7f223997bfdd3b7b1651fc73dcf518e0b3f9604d678a?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/654f53e82907aa5bfa1e7f223997bfdd3b7b1651fc73dcf518e0b3f9604d678a?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/654f53e82907aa5bfa1e7f223997bfdd3b7b1651fc73dcf518e0b3f9604d678a?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/654f53e82907aa5bfa1e7f223997bfdd3b7b1651fc73dcf518e0b3f9604d678a?apiKey=8a5a828a24f4486bb10b5e467f00f11e&"
                  className="aspect-square object-contain object-center w-[211px] overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d0ebdfeebaa5c98cd2840d2f533c349b25aae79966f0e057e254ebef998e87e5?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0ebdfeebaa5c98cd2840d2f533c349b25aae79966f0e057e254ebef998e87e5?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0ebdfeebaa5c98cd2840d2f533c349b25aae79966f0e057e254ebef998e87e5?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0ebdfeebaa5c98cd2840d2f533c349b25aae79966f0e057e254ebef998e87e5?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0ebdfeebaa5c98cd2840d2f533c349b25aae79966f0e057e254ebef998e87e5?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0ebdfeebaa5c98cd2840d2f533c349b25aae79966f0e057e254ebef998e87e5?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0ebdfeebaa5c98cd2840d2f533c349b25aae79966f0e057e254ebef998e87e5?apiKey=8a5a828a24f4486bb10b5e467f00f11e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0ebdfeebaa5c98cd2840d2f533c349b25aae79966f0e057e254ebef998e87e5?apiKey=8a5a828a24f4486bb10b5e467f00f11e&"
                  className="aspect-square object-contain object-center w-[211px] overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default Account;
