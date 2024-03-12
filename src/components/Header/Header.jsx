import profile from '../../assets/images/profile.png';

export const Header = () => {
  return (
    <header className='flex justify-between items-center mx-4 p-5 border-b-2'>
        <h1 className="text-4xl font-bold">Knowladge cafe</h1>
        <img src={profile} alt="" />
        
    </header>
  )
}
