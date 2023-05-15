import './App.css';
import Box from './components/Box';
import { Link } from "react-scroll";

const App = () => {

  return (
    <div className="App">
      <Box>
        <h1 style={{marginBottom:"0px"}}>TaeRim Lee</h1>
        <h4 style={{marginTop:"0px"}}>1995.10.12</h4>
        <h2 style={{marginBottom:"0px"}}>Blockchain & Backend Developer</h2>
        <h4 style={{marginTop:"0px"}}>+82 10 3790 8221</h4>
        <h3>95decode@gmail.com</h3>
        <div className='image-container'>
          <a href="https://github.com/95decode" target='_blank' rel='noopener noreferrer'>
            <img className='logo' src="/images/github.png" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/95decode" target='_blank' rel='noopener noreferrer'>
            <img className='logo' src="/images/linkedin.png" alt="Linkedin" />
          </a>
        </div>
      </Box>
      <br/>
      <Box>
        <h2>Education</h2>
        <p>B.S. in Electronic Engineering<br/>[2014.03 - 2020.02]</p>
        <p>M.S. in Electronic Engineering<br/><h4 style={{margin:'0px'}}>Blockchain Labs.</h4>[2020.03 - 2022.02]</p>
        <p>Sogang University, Seoul, Korea</p>
        <div className='image-container'>
          <a href='https://www.sogang.ac.kr/' target='_blank' rel='noopener noreferrer'>
            <img className='logo' src="/images/sogang.png" alt="Sogang" />
          </a>
        </div>
      </Box>
      <br/>
      <Box>
        <h2>Skills</h2>
        <p>Typescript</p>
        <p>Solidity</p>
        <p>Go</p>
        <p>Python</p>
        <div className='image-container'>
          <img className='logo' src="/images/typescript.png" alt="Typescript" />
          <img className='logo' src="/images/solidity.png" alt="Solidity" />
          <img className='logo' src="/images/go.png" alt="Go" />
          <img className='logo' src="/images/python.png" alt="Python" />
        </div>
      </Box>
      <br/>
      <Box>
        <h2>Work Experience</h2>
        <div className='image-container' style={{overflow:"auto"}}>
          <Link to={'blockchainLabs'} smooth={true} duration={500}>
            <img className='bigLogo' src="/images/sogang.png" alt="Sogang" />
          </Link>
          <Link to={'afreecaTV'} smooth={true} duration={500}>
            <img className='bigLogo' src="/images/afreecatv.png" alt="AfreecaTV" style={{maxWidth:'200px'}}/>
          </Link>
          <Link to={'hexlant'} smooth={true} duration={500}>
            <img className='bigLogo' src="/images/hexlant.png" alt="Hexlant" />
          </Link>
          <Link to={'etc'} smooth={true} duration={500}>
            <img className='bigLogo' src="/images/etc.png" alt="ETC" />
          </Link>
        </div><br /><br /><br />
        <h4 id='blockchainLabs'>BlockChain Labs</h4>
        <div className='image-container'>
          <img className='image' src="/images/kepco.png" alt="kepco" />
        </div>
        <h4>한국전력공사</h4>
        <p>블록체인과 IoT를 결합한 마이크로그리드 기반 신재생에너지 거래 플랫폼</p>
        <p>에너지 거래 플랫폼 및 프라이빗 이더리움 네트워크 구축</p><br /><br /><br />
        <div className='image-container'>
          <img className='image' src="/images/kipo.png" alt="kipo" />
        </div>
        <h4>ETC</h4>
        <p>연구재단 - 블록체인 알고리즘의 개선 및 차세대 활용 기법의 연구</p>
        <p>한국 에너지 기술 평가원 - 주택 대상 잉여전력 거래 및 공유 서비스 플랫폼 개발</p>
        <p>특허 2건 출원, IoTF 표준 1건 제정</p><br /><br /><br />
        <h3 id='afreecaTV'>AfreecaTV Freemeta</h3>
        <div className='image-container'>
          <img className='image' src="/images/aftmarket.png" alt="AFTmarket" />
        </div>
        <h4>AFTmarket</h4>
        <p>AfreecaTV IP를 활용한 NFT 마켓플레이드 백엔드 서버 개발</p>
        <p>ERC721 NFT 발행 및 메타데이터 관리</p><br /><br /><br />
        <div className='image-container'>
          <img className='image' src="/images/sara.png" alt="Sarang" />
        </div>
        <h4>FreeBlox</h4>
        <p>메타버스 플랫폼에 이용할 ERC20 토큰 발행 및 상장 준비</p><br /><br /><br />
        <h3 id='hexlant'>Hexlant</h3>
        <div className='image-container'>
          <img className='image' src="/images/extation.png" alt="Extation" />
        </div>
        <h4>Extation</h4>
        <p>Bridge, Staking 서비스 백엔드 서버, 컨트랙트 개발</p><br /><br /><br />
        <div className='image-container'>
          <img className='image' src="/images/shinhan.png" alt="Shinhan" />
        </div>
        <h4>Hexlant Contract</h4>
        <p>추가 예정</p><br /><br /><br />
        <h4>Contract Audit & Security research</h4>
        <p>추가 예정</p><br /><br /><br />
        <h4>TokenBank(O-HI Wallet)</h4>
        <p>추가 예정</p><br /><br /><br />
        <p>토큰뱅크 X 신한은행 SOL NFT 컨트랙트 개발 및 관리</p><br /><br /><br />
        <h3 id='etc'>ETC</h3>
        <div className='image-container'>
          <img className='image' src="/images/bcee.png" alt="BCEE" />
        </div>
        <p>Fully On-Chain Metadata NFT 컨트랙트 제작 및 발행</p><br /><br /><br />
        <div className='image-container'>
          <img className='image' src="/images/kip97.png" alt="KIP97" />
        </div>
        <p>클레이튼 서명 표준 <a href='https://kips.klaytn.foundation/KIPs/kip-97' target='_blank' rel='noopener noreferrer'>[KIP-97]</a> 제안</p><br /><br /><br />
      </Box>
    </div>
    
  );
}

export default App;
