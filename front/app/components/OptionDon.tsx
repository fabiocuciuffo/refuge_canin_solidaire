function OptionDon ({onClickCallback, selectedAmount, content}:{onClickCallback?: (e: React.MouseEvent<HTMLDivElement>) => void, selectedAmount: string, content: string}) {
  let classActive = "invisible"
  if(selectedAmount === content){
    classActive = ""
  }
  return (
      <div className="flex md:flex-col justify-center items-center mb-3 cursor-pointer" onClick={onClickCallback} key={content}>
        <div className="rounded-full border-2 bg-beige p-1 md:p-4 me-4">
          <div className={"bg-red p-1.5 md:p-3 rounded-full coche_option" + " " + classActive} data-value={content}></div>
        </div>
        <h6 className="title6 w-fit mx-auto whitespace-nowrap"><span className="coche_value">{content}</span> €</h6>
      </div>
  )
}
export default OptionDon