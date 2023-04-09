function calcAge() {
        var age = 25;
        return () => {
                age += 1;
                return age * 365
        }
}
