class PagesController < ApplicationController

    def index
        @pages = Page.all
        render component: "Pages", props:{pages:@pages}
    end

    def show
    end

    def create
    end
    
    def delete
    end
    
    def update
    end

end
