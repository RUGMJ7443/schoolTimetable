const root = document.documentElement;
const theme = localStorage.getItem('theme');

switch (theme) {
	default:
	case 'light':
		// root.style.setProperty("--primary-color", "rgb(255, 245, 233)");
		root.style.setProperty(
			'--primary-color',
			'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)'
		);
		//background-image: ;
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
	case 'custom':
		const customTheme = JSON.parse(localStorage.getItem('custom-theme'));
		if (!customTheme)
			alert(
				'We didnt find a config for your custom theme... \n please report this bug'
			);
		root.style.setProperty(
			'--primary-color',
			customTheme.primaryColor ||
				'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)'
		);
		root.style.setProperty(
			'--primary-text-color',
			customTheme.primaryTextColor || '#000000'
		);
		root.style.setProperty(
			'--secondary-color',
			customTheme.secondaryColor || 'rgb(236, 193, 49)'
		);
		root.style.setProperty(
			'--secondary-color-hover',
			customTheme.secondaryColorHover || 'rgb(236, 193, 49)'
		);
		root.style.setProperty(
			'--secondary-text-color',
			customTheme.secondaryTextColor || '#000000'
		);
		root.style.setProperty(
			'--secondary-text-color-hover',
			customTheme.secondaryColorHover || '#3a3939'
		);
		break;
}
