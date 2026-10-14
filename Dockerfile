FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt && useradd -m -u 10001 app
COPY main.py manage.py ./
RUN mkdir -p /data && chown app:app /data
USER app
ENV AUTH_DB=/data/auth.sqlite3
ENV PORT=8787
EXPOSE 8787
CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8787} --no-access-log"]
