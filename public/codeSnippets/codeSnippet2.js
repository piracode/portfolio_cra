const SearchResults = () => {
  const location = useLocation()
  const searchQuery = new URLSearchParams(location.search).get('query')
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (searchQuery) {
      searchMovies(searchQuery).then((data) => {
        setMovies(data)
      })
    }
  }, [searchQuery])
}
