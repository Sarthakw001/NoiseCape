const Modal = ({data1,data2}) => {
  return (
    <div>
      <input type="checkbox" id={data2} className="modal-toggle" />
      <label htmlFor={data2} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {data1 === "Instruction" && (
            <div>
              <h3 className="text-lg font-bold">Instruction</h3>
              <ol className="py-4">
                <li>1. Instruction1</li>
                <li>2. Instruction2</li>
              </ol>
            </div>
          )}

          {data1 === "About Us" && (
            <div>
              <h3 className="text-lg font-bold">About Us</h3>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, aliquam deserunt. Aliquid magni earum, atque obcaecati
                vitae sit deserunt quia.
              </p>
            </div>
          )}
        </label>
      </label>
    </div>
  );
};

export default Modal;
