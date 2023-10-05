import { useState, useEffect } from "react";
import Modal from "react-modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles.css";

const GuiasTuristicasContent = ({ data }) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [detailModal, setDetailGuide] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, []);

  const showModal = (item) => {
    //alert("text");
    setIsOpen(true);
    setDetailGuide(item);
    //{guides.map((item)=>{
    //alert("info:"+item.title);
    //})}
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section>
      <div className="calendario2-eventos">
        <h2 className="destination-known-title">{data?.titleTop}</h2>
        <hr class="calendario2-hr" />
        <h4 className="calendare-known-subtitle">{data?.subTitle}</h4>
      </div>
      <div className="guias-contenedor">
        {data?.gallery?.map((item) => (
          <div
            className="guias-item"
            onClick={() => {
              showModal(item);
            }}>
            <LazyLoadImage src={item?.urlImg} alt={item?.title} />
            <p className="guias-texto">{item.title}</p>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalGuides2"
      >
        <div className="modalGuides">
            <div className="guias-modal-header">
              <h5 className='guias-modal-title'>{detailModal.title}</h5>
              <span class="guias-modal-close" onClick={closeModal}>x</span>
            </div>
          <div className="guias-modal-body">
            <p className='guias-modal-text'>{detailModal.text}</p>
            <div className="guias-modal-downloads">
              {detailModal?.guides?.map((item) => (
                 <a href={item.link} className="guias-modal-download" >
                       <LazyLoadImage src={item?.urlImg} alt={item?.title} />
                  <p >{item.title}</p>
               </a>
              ))}
            </div>

           
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default GuiasTuristicasContent;
