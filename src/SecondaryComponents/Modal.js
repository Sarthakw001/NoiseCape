const Modal = ({data1,data2}) => {
  return (
    <div>
      <input type="checkbox" id={data2} className="modal-toggle" />
      <label htmlFor={data2} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {data1 === "Instruction" && (
            <div>
              <h3 className="text-lg font-bold   ">Instruction</h3>
              <ol className="py-4">
                <li>1. Use the sidebar to control global volume of the app.</li>
                <li>2. Click on the noise icons to play the sounds</li>
                <li>3. Use the slider below every icon to control individual volume</li>
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
