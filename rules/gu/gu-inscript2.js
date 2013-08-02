( function ( $ ) {
	'use strict';

	var guInScript2 = {
		id: 'gu-inscript2',
		name: 'ઇનસ્ક્રિપ્ટ ૨',
		description: 'Enhanced InScript keyboard for Gujarati script',
		date: '2013-11-15',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['!', 'ઍ'],
			['1', '૧'],
			['\\@', 'ૅ'],
			['2', '૨'],
			['\\#', '્ર'],
			['3', '૩'],
			['$', 'ર્'],
			['4', '૪'],
			['5', '૫'],
			['6', '૬'],
			['7', '૭'],
			['8', '૮'],
			['\\(', '('],
			['9', '૯'],
			['\\)', ')'],
			['0', '૦'],
			['\\_', 'ઃ'],
			['\\-', '-'],
			['\\+', 'ઋ'],
			['\\=', 'ૃ'],
			['Q', 'ઔ'],
			['q', 'ૌ'],
			['W', 'ઐ'],
			['w', 'ૈ'],
			['E', 'આ'],
			['e', 'ા'],
			['R', 'ઈ'],
			['r', 'ી'],
			['T', 'ઊ'],
			['t', 'ૂ'],
			['Y', 'ભ'],
			['y', 'બ'],
			['U', 'ઙ'],
			['u', 'હ'],
			['I', 'ઘ'],
			['i', 'ગ'],
			['O', 'ધ'],
			['o', 'દ'],
			['P', 'ઝ'],
			['p', 'જ'],
			['\\{', 'ઢ'],
			['\\[', 'ડ'],
			['\\}', 'ઞ'],
			['\\]', '઼'],
			['A', 'ઓ'],
			['a', 'ો'],
			['S', 'એ'],
			['s', 'ે'],
			['D', 'અ'],
			['d', '્'],
			['F', 'ઇ'],
			['f', 'િ'],
			['G', 'ઉ'],
			['g', 'ુ'],
			['H', 'ફ'],
			['h', 'પ'],
			['j', 'ર'],
			['K', 'ખ'],
			['k', 'ક'],
			['L', 'થ'],
			['l', 'ત'],
			[':', 'છ'],
			[';', 'ચ'],
			['"', 'ઠ'],
			['\\\'', 'ટ'],
			['\\|', 'ઑ'],
			['\\', 'ૉ'],
			['X', 'ઁ'],
			['x', 'ં'],
			['C', 'ણ'],
			['c', 'મ'],
			['v', 'ન'],
			['b', 'વ'],
			['N', 'ળ'],
			['n', 'લ'],
			['M', 'શ'],
			['m', 'સ'],
			['\\<', 'ષ'],
			[',', ','],
			['\\>', '।'],
			['\\.', '.'],
			['/', 'ય'],
			['\\%', 'જ્ઞ'],
			['\\^', 'ત્ર'],
			['\\&', 'ક્ષ'],
			['\\*', 'શ્ર']
		],
		patterns_x: [
			['1', '‍'],
			['2', '‌'],
			['4', '₹'],
			['\\+', 'ૠ'],
			['\\=', 'ૄ'],
			['R', 'ૡ'],
			['r', 'ૣ'],
			['F', 'ઌ'],
			['f', 'ૢ'],
			['X', 'ૐ'],
			[',', '૱'],
			['\\>', '૥'],
			['\\.', 'ઽ']
		]
	};

	$.ime.register( guInScript2 );
}( jQuery ) );
