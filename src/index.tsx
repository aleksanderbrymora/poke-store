import React from 'react';
import { unstable_createRoot as createRoot } from 'react-dom';
import App from './components/App';
import { RecoilRoot } from 'recoil';

const rootEl = document.getElementById('root') as HTMLElement;

createRoot(rootEl).render(
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>,
);
