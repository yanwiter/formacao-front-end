const UserDetails = ({ name, job, age }) => {
  return (
    <div>
        <p>Nome: {name} | Profissão: {job} | Idade: {age} </p>
        {age >= 18 ? (<p>✅ {name} já pode tirar carteira de motorista</p>) 
                   : (<p>❌ {name} Ainda não pode tirar carteira de motorista</p>)}
    </div>
  )
}

export default UserDetails