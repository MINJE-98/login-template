import LinkTo from '@Components/LinkTo';

const Form = ({ isLogin, errorMessage, handleSubmit }: any) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Username</span>
        <input type="text" name="username" required />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" required />
      </label>
      {!isLogin && (
        <label>
          <span>Repeat password</span>
          <input type="password" name="rpassword" required />
        </label>
      )}

      <div className="submit">
        {isLogin ? (
          <>
            <LinkTo href="/signup">계정이 없으신가요?</LinkTo>
            <button type="submit">Login</button>
          </>
        ) : (
          <>
            <LinkTo href="/signin">이미 계정이 있어요!</LinkTo>
            <button type="submit">Signup</button>
          </>
        )}
      </div>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <style jsx>{`
        form,
        label {
          display: flex;
          flex-flow: column;
        }
        label > span {
          font-weight: 600;
        }
        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .submit {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          justify-content: space-between;
        }
        .submit > a {
          text-decoration: none;
        }
        .submit > button {
          padding: 0.5rem 1rem;
          cursor: pointer;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .submit > button:hover {
          border-color: #888;
        }
        .error {
          color: brown;
          margin: 1rem 0 0;
        }
      `}</style>
    </form>
  );
};

export default Form;
