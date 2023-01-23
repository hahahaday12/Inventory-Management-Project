import axios from 'axios';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function Main(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() =>{
		axios.defaults.withCredentials = true
		axios.post('http://localhost:3001/auth/silent-refresh',{},{
			withCredentials : true
		}).then(res=> {
			console.log(res);
			const {accessToken} = res.data;
			if(accessToken){
				axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
				setIsLoggedIn(true)
			}
		});
	},[]);

    return (
		<>
			<main>
				<div className="desktop-about-module--topContainer--837oD common-module--gradientBG--ga+Ua">
					<div className="common-module--desktopBaseContainer--x3wV3 desktop-about-module--topContentContainer--14BkQ">
						<div className="desktop-about-module--topLeftContainer--OADOD"></div>
						<div data-gatsby-image-wrapper="" className="gatsby-image-wrapper"></div>
						{!isLoggedIn && <a href="http://localhost:3001/auth/kakao">카카오로 로그인하기</a>}
						{isLoggedIn && <nav >로그인 되었습니다.</nav>}
					</div>
				</div>
			</main>
		</>
    );
}

export default Main;