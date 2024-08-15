import "./nosotros.css";
import { Header } from "../../components/header/Header";
import { Subscribe } from "../../components/subscribe/Subscribe";
import { Hacemos } from "../../components/hacemos/Hacemos";
import { Footer } from "../../components/footer/Footer";

export const Nosotros = () => {
  return (
    <>
      <Header />

      <div className="subscribe-container">
        <Subscribe />
      </div>

      <div className="nosotros-container">
        <div className="div-1">
          <div className="nosotros-text-1">
            <h2>Nosotros</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam dignissimos excepturi ad voluptatem numquam velit, quis
              provident tempora laborum dolorem distinctio aperiam quod vel
              perferendis, placeat doloribus saepe modi consectetur. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Est, quo? Quasi
              magnam dolore consequuntur laboriosam officiis ipsa. Quo molestiae
              ut vero, rerum reprehenderit harum quam non natus tempore officia
              culpa.
            </p>
          </div>
          <div className="nosotros-text-2">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam dignissimos excepturi ad voluptatem numquam velit, quis
              provident tempora laborum dolorem distinctio aperiam quod vel
              perferendis, placeat doloribus saepe modi consectetur. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Est, quo? Quasi
              magnam dolore consequuntur laboriosam officiis ipsa. Quo molestiae
              ut vero, rerum reprehenderit harum quam non natus tempore officia
              culpa.
            </p>
          </div>

          <div className="imagen-891-contenedor">
            <img src="../../../src/assets/images/891.jpg" alt="image" />
          </div>
        </div>

        <div className="div-2">
          <Hacemos/>
        </div>

      </div>

      <Footer/>
    </>
  );
};
