const root = document.documentElement;
const theme = localStorage.getItem('theme');

switch (theme) {
	default:
	case 'light':
		// root.style.setProperty("--primary-color", "rgb(255, 245, 233)");
		root.style.setProperty(
			'--primary-color',
			'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)'
		);
		root.style.setProperty('--primary-text-color', '#000000');
		root.style.setProperty('--secondary-color', 'rgb(240, 209, 106)');
		root.style.setProperty('--secondary-color-hover', 'rgb(236, 193, 49)');
		root.style.setProperty('--secondary-text-color', '#000000');
		root.style.setProperty('--secondary-text-color-hover', '#3a3939');
		break;
	case 'dark':
		// root.style.setProperty('--primary-color', '#363946');
		root.style.setProperty(
			'--primary-color',
			'linear-gradient(to right, #1b2035 0%, #363946 100%)'
		);
		root.style.setProperty('--primary-text-color', '#ffff');
		root.style.setProperty('--secondary-color', '#303a68');
		root.style.setProperty('--secondary-color-hover', '#193ee5');
		root.style.setProperty('--secondary-text-color', '#ffff');
		root.style.setProperty('--secondary-text-color-hover', '#fafafa');
		break;
}
