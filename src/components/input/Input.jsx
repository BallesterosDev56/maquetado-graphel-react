import "./input.css";

export const Input = () => {
  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        name="email"
        placeholder="Ingresa tu Email..."
        required
      />
      <button className="btn" type="submit">
        Subscríbete
      </button>
    </div>
  );
};
