package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"github.com/wisp-gg/gamequery"
	"github.com/wisp-gg/gamequery/api"
)

func main(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	game := r.URL.Query().Get("game")
	if len(game) == 0 {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprintf(w, `{"status": "error", "message": "Please provide a valid game."}`)
		return
	}

	ip := r.URL.Query().Get("ip")
	if len(ip) == 0 {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprintf(w, `{"status": "error", "message": "Please provide a valid IP."}`)
		return
	}

	port := r.URL.Query().Get("port")
	if len(port) == 0 {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprintf(w, `{"status": "error", "message": "Please provide a valid port."}`)
		return
	}

	convertedPort, error := strconv.ParseUint(port, 0, 16)
	if error != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintf(w, `{"status": "error", "message": "Could not convert port query to integer."}`)
		return
	}

	res, err := gamequery.Query(api.Request{
		IP:   ip,
		Port: uint16(convertedPort),
		Game: game,
	})

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintf(w, `{"status": "error", "message": "Failed to query server."}`)
		return
	}

	w.Header().Set("Cache-Control", "s-maxage=1, stale-while-revalidate=59")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(res)
}