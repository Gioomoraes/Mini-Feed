import styles from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <h1>Entrar</h1>
      <p>Crie seu usuário e compartilhe suas postagens!</p>
      <form onSubmit={handleSubmit}>
        
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do Usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
