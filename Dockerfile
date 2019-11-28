FROM nginx:alpine
COPY dist/mytournamentx /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

RUN echo "for f in \$(find /usr/share/nginx/html -name 'main*.js'); do \
          envsubst '\$API_URL' < \$f > main.tmp ; \
          mv main.tmp \$f ; done && \
          nginx -g 'daemon off;'" > run.sh

COPY entrypoint.sh /usr/share/nginx/
RUN chmod +x /usr/share/nginx/entrypoint.sh
ENTRYPOINT ["/bin/sh", "/usr/share/nginx/entrypoint.sh"]

