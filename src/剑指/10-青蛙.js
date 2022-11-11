function numWays(n) {
	// 边界
	if (n <= 1) return 1
	
	let a = 1, b = 1, r = 0
	// 滑动替换n-1 n-2
	for (let i = 2; i <= n; i++) {
		r = (a + b) % 1000000007
		a = b
		b = r
	}

	return r
}