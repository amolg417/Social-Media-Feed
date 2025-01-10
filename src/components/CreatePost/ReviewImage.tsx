import leftArrow from "../../assets/Profile/svg/SmLeft.svg";
const ReviewImage = () => {
  return (
    <div className="w-full h-full flex justify-center absolute top-0 left-0 z-[70] bg-[#fff]">
      <img src="https://s3-alpha-sig.figma.com/img/b54f/d858/f5e14f76f0793df709ce9bfe5e5f284e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OUayc-gYnwYG2c5jBWaNT4FCWqxLcpIzlYZrRbOdbL-ALD~DIjPePMFn8qMGdvxE1KtrjNqSgTqcpScQiae~W21LVeN31Uwk~kkOvyVkyArnlc3f~QEpmFK2r8xrHLAnn2jgY4E3Q8tzlE~89tTOYuiSmWSCJOXAdHnvkjPngRQw0Y0Bh4~1W1TZbUwRCN5G7U5CHbm4~bwAkIbOWeHqKsGXfSc6foIhyv2RXRywlHBQwxOl4TDFKkCjeWpsySvRRIFS8GxTcDKDHZ6fvlDo0pbbzEfeUO5nL3tqMqk6x96OUnqIa5RgGHve48JlYMsFYWECzAMQibEj57UKQeFaQw__" alt="image" className="w-full h-full object-cover" />
      <img
        src={leftArrow}
        alt="closeIcon"
        className="w-8 absolute top-2 left-2"
        // onClick={}
      />
      <button className="fixed bottom-4 w-[90%] py-3 text-center text-[#fff] bg-black font-[500] rounded-lg">PROCEED</button>
    </div>
  )
}

export default ReviewImage
