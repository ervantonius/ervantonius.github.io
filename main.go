package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/julienschmidt/httprouter"
)

func main() {
	// Create the router.
	router := httprouter.New()
	router.GET("/", func(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
		w.WriteHeader(404)
	})

	// Route apiDoc.
	subs := []string{"dashboard", "visitor", "internal", "integration", "public"}
	for _, s := range subs {
		router.ServeFiles("/apidoc/"+s+"/*filepath", http.Dir("apidoc-cstd/"+s))
	}

	srv := http.Server{Addr: ":3124", Handler: router}
	log.Println("main", fmt.Sprintf("Serving HTTP server on %s...", srv.Addr))
	if err := srv.ListenAndServe(); err != http.ErrServerClosed {
		// Error starting or closing listener.
		log.Println("main", fmt.Sprintf("ERROR: HTTP server ListenAndServe: %v", err.Error()))

		// Wait for 1 second before exit.
		time.Sleep(1 * time.Second)
		os.Exit(1)
	}
}
