export default function App() {
  return (
    <div
      style={{
        padding: "20px",
        color: "red",
        fontSize: "24px",
        backgroundColor: "white",
      }}
    >
      <h1>TESTE - App está carregando!</h1>
      <p>Se você está vendo isso, o React está funcionando.</p>
      <p>Data atual: {new Date().toLocaleString()}</p>
    </div>
  );
}
