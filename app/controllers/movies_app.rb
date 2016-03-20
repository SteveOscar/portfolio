class PortfolioApp < Sinatra::Base

  get '/' do
    erb :welcome
  end

end
